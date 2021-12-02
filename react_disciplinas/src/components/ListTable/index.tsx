import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../Service/api";

interface Idisciplinas {
  id: string;
  disciplina: string;
  cargahoraria: string;
  professor: string;
}

export function ListTable() {
  const [disciplinas, setDisciplinas] = useState<Idisciplinas[]>([]);

  async function dados() {
    const dados = await api.get(`/faculdade`).then((res) => res.data);
    setDisciplinas(dados);
  }

  useEffect(() => {
    dados();
  }, []);

  async function apagarDisciplina(id: string) {
    await api.delete(`/faculdade/${id}`);

    dados();
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Carga Horaria</th>
            <th>Professor</th>
          </tr>
        </thead>

        <tbody>
          {disciplinas.map((event: Idisciplinas) => {
            return (
              <tr key={event.id}>
                <td>{` ${event.disciplina}`}</td>
                <td>{` ${event.cargahoraria}`}</td>
                <td>{` ${event.professor}`}</td>

                <button
                  className="excluir"
                  onClick={() => {
                    apagarDisciplina(event.id);
                  }}
                >
                  Excluir
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

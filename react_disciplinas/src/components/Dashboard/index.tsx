import { Container } from "./styles";
import { useEffect, useState} from "react";
import { api } from "../../Service/api";
import { ListTable } from "../ListTable";

interface Idisciplinas {
  id: string;
  disciplina: string;
  cargahoraria: string;
  professor: string;
}

export function Dashboard() {
  const [disciplinas, setDisciplinas] = useState<Idisciplinas[]>([]);

  const [disciplina, setNomeDisciplina] = useState("");
  const [cargahoraria, setCargaHoraria] = useState("");
  const [professor, setProfessor] = useState("");

  async function dados() {
    const dado = await api.get(`/faculdade`).then((res) => res.data);
    setDisciplinas(dado);
  }

  useEffect(() => {
    dados();
  }, []);


  async function cadastrarDisciplina() {

    if (!disciplina.trim() || !cargahoraria.trim() || !professor.trim()) {
      return;
    }

    const novaDisciplina = await api.post(`/faculdade`, {
      disciplina,
      cargahoraria,
      professor,
    });

    const { data } = novaDisciplina;

    setDisciplinas([...disciplinas, data]);

  }

  return (
    <Container>
      <form onSubmit={cadastrarDisciplina}>
        <label>Disciplina:</label>
        <input
          name="nomedisciplina"
          placeholder="Digite a disciplina"
          type="text"
          value={disciplina}
          onChange={(event) => setNomeDisciplina(event.target.value)}
        />

        <label>Carga Horaria:</label>
        <input
          name="cargahoraria"
          placeholder="Digite a carga horaria"
          type="text"
          value={cargahoraria}
          onChange={(event) => setCargaHoraria(event.target.value)}
        />

        <label>Professor:</label>
        <input
          name="professor"
          placeholder="Digite o professor"
          type="text"
          value={professor}
          onChange={(event) => setProfessor(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      <ListTable />
    </Container>
  );
}

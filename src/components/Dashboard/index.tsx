import { Summary } from "../Summary";
import { BetTable } from "../BetsTable";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <BetTable />
    </Container>
  );
}

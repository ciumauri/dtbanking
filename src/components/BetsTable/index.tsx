import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function BetTable() {
  useEffect(() => {
    api.get("bets").then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Liga</th>
            <th>Mercado</th>
            <th>Stake</th>
            <th>ODD</th>
            <th>Status</th>
            <th>Lucro</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Campeonato Brasileiro</td>
            <td>Back Favorito</td>
            <td>R$ 75,00</td>
            <td>1.50</td>
            <td className="green">GREEN</td>
            <td className="green">R$ 37,50</td>
            <td>20/10/2022</td>
          </tr>
          <tr>
            <td>Campeonato Italiano</td>
            <td>Over 1.5 FT</td>
            <td>R$ 25,00</td>
            <td>2.40</td>
            <td className="red">RED</td>
            <td className="red">-R$ 25,00</td>
            <td>20/10/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

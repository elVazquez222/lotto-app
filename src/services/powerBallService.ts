import API_URLS from '@/schemas/apiUrls';
import { gql, request } from 'graphql-request';

interface DrawnNumbers {
  name: string;
  values: number[];
}

interface FinishedDrawPayload {
  addOns: string[];
  drawDate: Date;
  drawnNumbers: DrawnNumbers[];
  id: string;
  lotteryId: 'PowerBall';
}


export interface FinishedDrawPayloadWithFormattedDateFields
extends FinishedDrawPayload {
  shortenedDate: string;
  prettyDrawDate: string;
}

interface DrawHistoryPayload {
  draws: FinishedDrawPayload[];
}

export interface PowerBallDrawHistoryResponse {
  drawHistory: DrawHistoryPayload;
}

function fetchPowerBallDrawHistory(limit = 10, offset = 0): Promise<PowerBallDrawHistoryResponse> {
  const query = gql`
    query GetPowerBallDrawHistory($filter: DrawResultsFilterInput!, $licensedTerritory: String!, $limit: Int!, $offset: Int!) {
      drawHistory(filter: $filter, licensedTerritory: $licensedTerritory, limit: $limit, offset: $offset) {
        draws {
          id
          addOns
          drawDate
          addOns
          drawnNumbers {
            numbers {
              name
              values
            }
          }
        }
      }
    }
  `;

  const variables = {
    filter: { lotteries: ['PowerBall'] },
    licensedTerritory: 'US-NJ',
    limit,
    offset,
  };

  return request(API_URLS.graphQlEp_with_proxy, query, variables);
}

export { fetchPowerBallDrawHistory };


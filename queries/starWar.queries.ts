import { gql } from "@apollo/client";

export const GET_VEHICLE = gql`
    query Query {
        allVehicles {
        totalCount
        vehicles {
            name
            model
            vehicleClass
        }
        }
    }
`

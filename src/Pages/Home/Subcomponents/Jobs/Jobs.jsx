
import React from 'react'

/**
 * @desc Estilos
 */
import { Container, Job, Filters } from "./Jobs.styles"

/**
 * @desc Material-ui
 */
import { Grid } from '@material-ui/core'

function Jobs() {
    return (
        <Container>
            <Grid container>
                <Grid item sm={2}>
                    Filtros
                    <Filters></Filters>
                </Grid>
                <Grid item xs={12} sm={10}>
                    Ofertas
                    <Job>                                                                      
                    </Job>
                    <Job>                                                                      
                    </Job>
                    <Job>                                                                      
                    </Job>
                    <Job>                                                                      
                    </Job>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Jobs

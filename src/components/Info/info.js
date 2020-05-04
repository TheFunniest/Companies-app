import React, { useEffect, useState, useContext } from "react";
import { useInfoStyles } from "./styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { useLocation, useHistory } from "react-router-dom";
import { API_KEY } from "../../env";
import { Context } from "../../context";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Paper, Typography, Container, Button } from "@material-ui/core";

export const Info = () => {
  const { setPageNow, loadCompanyInfo} = useContext(Context);
  console.log(setPageNow);
  const classes = useInfoStyles();
  const { state } = useLocation();
  console.log(state.pageNow);
  const history = useHistory();
  let url = "https://api-v2.intrinio.com/companies";
  let [companyInfo, setCompanyInfo] = useState({});
  
  useEffect(() => {
    loadCompanyInfo(url, API_KEY, state.ticker, setCompanyInfo);
    // eslint-disable-next-line
  }, []);

  const goBack = () => {
    console.log(state.pageNow);
    history.goBack();
  };

  return (
    <Container className={classes.Container}>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.headerInfo}>
          {companyInfo.name}
        </Typography>
        <Typography variant="h6">{`${companyInfo.hq_country}, ${companyInfo.hq_state}, ${companyInfo.hq_address_city}, ${companyInfo.hq_address1}`}</Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.companyPhone}
        >
          {`Industry category: ${companyInfo.industry_category}`}
        </Typography>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          className={classes.companyPhone}
        >{`CEO: ${companyInfo.ceo}`}</Typography>

        <div className={classes.expPanelDiv}>
          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Short description
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{companyInfo.short_description}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Long description
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{companyInfo.long_description}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <Button
          variant="contained"
          color="primary"
          href={`http://${companyInfo.company_url}`}
          className={classes.companySiteBtn}
          target="_blank"
        >
          Company site
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={goBack}
          className={classes.companySiteBtn}
        >
          Go Back
        </Button>
      </Paper>
    </Container>
  );
};

import { API_KEY } from "./env";
import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = props => {
  let url = "https://api-v2.intrinio.com/companies";

  const [allCompanies, setCompanies] = useState();
  const [pageNow, setPageNow] = useState(1);

  const loadCompanies = async () => {
    const response = await fetch(`${url}?&api_key=${API_KEY}`);
    const json = await response.json();
    const { companies } = json;
    setCompanies(companies);
  };

  const loadCompanyInfo = async (url, API_KEY, ticker, setCompany) => {
    const response = await fetch(`${url}/${ticker}?&api_key=${API_KEY}`);
    const company = await response.json();
    setCompany(company);
  };

  const showCompanies = (e, page) => {
    setPageNow(page);
  };

  const state = {
    pageNow,
    allCompanies,
    loadCompanies,
    showCompanies,
    loadCompanyInfo,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

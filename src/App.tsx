import React from "react";
import NotesContainer from "./app/Notes/components/NotesContainer";
import Header from "./app/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect, Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import languageObject from "./utils/translator/messages";
import { changeLocale } from "./utils/translator/localereducer";
import store from "./store/store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./lib/material-ui/theme";
import { StylesProvider } from "@material-ui/core/styles";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

type Props = {
  locale: string;
  changeLocale: typeof changeLocale;
};

const App: React.FC<Props> = ({ locale, changeLocale }) => (
  <IntlProvider locale={locale} messages={languageObject[locale]}>
    <CssBaseline />
    <Header changeLocale={changeLocale} />
    <NotesContainer />
  </IntlProvider>
);

const mapStateToProps = state => ({
  locale: state.locale.locale,
});

const AppContainer = connect(mapStateToProps, { changeLocale })(App);

const MyApp = () => (
  <Provider store={store}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </StylesProvider>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick
    />
  </Provider>
);

export default MyApp;

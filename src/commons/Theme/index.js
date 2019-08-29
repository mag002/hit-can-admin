import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  color: {
    edit: "#F0AD4E",
    clone: "#17A2B8",
    delete: "#D9534F"
  }
});
theme = responsiveFontSizes(theme);
export default theme;

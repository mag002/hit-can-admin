import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";
let theme = createMuiTheme({
  color: {
    edit: "#F0AD4E",
    clone: "#17A2B8",
    delete: "#D9534F"
  },

  palette: {
    primary: indigo,
    secondary: pink
  }
});
theme = responsiveFontSizes(theme);
export default theme;

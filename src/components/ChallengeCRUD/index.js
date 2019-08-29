import React from "react";
import { PageTitle } from "..";
import MaterialTable from "material-table";
// import { withStyles, createStyles } from "@material-ui/core/styles";
import { CHALLENGE_TABLE_COLUMNS } from "../../constants/challengeTableColumns";

// const styles = theme =>
// createStyles({
//   button: {
//     color: "white",
//     margin: theme.spacing(1),
//     "&.edit": {
//       background: theme.color.edit
//     },
//     "&.clone": {
//       background: theme.color.clone
//     },
//     "&.delete": {
//       background: theme.color.delete
//     }
//   },
//   leftIcon: {
//     marginRight: theme.spacing(1)
//   },
//   iconSmall: {
//     fontSize: 20
//   }
// });
class ChallengeCRUD extends React.Component {
  componentDidMount() {
    this.props.challengeActions.fetchChallengeListRequest();
  }
  handleEditClick = (event, rowData) => {
    alert(rowData.name);
  };
  render() {
    return (
      <div>
        <PageTitle title={this.props.title} />
        <MaterialTable
          columns={CHALLENGE_TABLE_COLUMNS}
          data={this.props.data.challenge}
          title="Challenge "
          isLoading={this.props.data.isLoading}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Challenge",
              onClick: this.handleEditClick
            },
            {
              icon: "file_copy",
              tooltip: "Clone Challenge",
              onClick: (event, rowData) =>
                alert("You want to clone" + rowData.name)
            },
            {
              icon: "delete",
              tooltip: "Delete Challenge",
              onClick: (event, rowData) =>
                alert("You want to delete " + rowData.name)
            }
          ]}
          //Neu can doi mau theo giao dien
          // components={{
          //   Action: privProps => {
          //     //Override Action Buttons depend on action.icon
          //     if (privProps.action.icon) {
          //       switch (privProps.action.icon) {
          //         case "edit": {
          //           return (
          //             <Button
          //               onClick={event =>
          //                 privProps.action.onClick(event, privProps.data)
          //               }
          //               variant="contained"
          //               className={clsx(this.props.classes.button, "edit")}
          //             >
          //               <Icon
          //                 className={clsx(
          //                   this.props.classes.leftIcon,
          //                   this.props.classes.iconSmall
          //                 )}
          //               >
          //                 {privProps.action.icon}
          //               </Icon>
          //               Edit
          //             </Button>
          //           );
          //         }
          //         case "file_copy": {
          //           return (
          //             <Button
          //               onClick={event =>
          //                 privProps.action.onClick(event, privProps.data)
          //               }
          //               variant="contained"
          //               className={clsx(this.props.classes.button, "clone")}
          //             >
          //               <Icon
          //                 className={clsx(
          //                   this.props.classes.leftIcon,
          //                   this.props.classes.iconSmall
          //                 )}
          //               >
          //                 {privProps.action.icon}
          //               </Icon>
          //               Clone
          //             </Button>
          //           );
          //         }
          //         default: {
          //           return (
          //             <Button
          //               onClick={event =>
          //                 privProps.action.onClick(event, privProps.data)
          //               }
          //               variant="contained"
          //               className={clsx(this.props.classes.button, "delete")}
          //             >
          //               <Icon
          //                 className={clsx(
          //                   this.props.classes.leftIcon,
          //                   this.props.classes.iconSmall
          //                 )}
          //               >
          //                 {privProps.action.icon}
          //               </Icon>
          //               Delete
          //             </Button>
          //           );
          //         }
          //       }
          //     }
          //   }
          // }}
          options={{
            actionsColumnIndex: -1,
            pageSize: 10
          }}
        />
      </div>
    );
  }
}
// export default withStyles(styles)(ChallengeCRUD);
export default ChallengeCRUD;

import React from "react";
import { PageTitle } from "..";
import MaterialTable from "material-table";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { CHALLENGE_TABLE_COLUMNS } from "../../constants/challengeTableColumns";

const styles = theme =>
  createStyles({
    editIco: {
      color: theme.color.edit
    },
    cloneIco: {
      color: theme.color.clone
    },
    deleteIco: {
      color: theme.color.delete
    }
  });
class ChallengeCRUD extends React.Component {
  componentDidMount() {
    this.props.challengeActions.fetchChallengeListRequest();
  }
  handleEditClick = (event, rowData) => {
    this.props.adminPageActions.toggleSidebar();
    this.props.history.push(`/chall/${rowData.id}`);
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data.challenge !== this.props.data.challenge) {
      return true;
    }
    return false;
  }
  render() {
    const { editIco, cloneIco, deleteIco } = this.props.classes;
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
              onClick: this.handleEditClick,
              iconProps: {
                className: editIco
              }
            },
            {
              icon: "file_copy",
              tooltip: "Clone Challenge",
              onClick: (event, rowData) =>
                alert("You want to clone" + rowData.name),
              iconProps: {
                className: cloneIco
              }
            },
            {
              icon: "delete",
              tooltip: "Delete Challenge",
              onClick: (event, rowData) =>
                alert("You want to delete " + rowData.name),
              iconProps: {
                className: deleteIco
              }
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
export default withStyles(styles)(ChallengeCRUD);
// export default ChallengeCRUD;

import * as React from "react";
import { MemberVm } from "../../member.vm";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, CardContent, TablePagination, Paper, TableContainer, makeStyles, Avatar } from "@material-ui/core";

interface Props {
  membersCollection: MemberVm[]
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    fontFamily: 'Roboto',
  },
  container: {
    maxHeight: 440,
  },
  title: {
    fontSize: '1.5rem',
    width: '100%',
    textAlign: 'center',
    margin: '1%'
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export const MembersTableComponent = (props: Props) => {
  const classes = useStyles({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.title}>Organization's members</div>
          <Paper>
            <TableContainer className={classes.container}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Avatar</TableCell>
                    <TableCell align="left">Github Id</TableCell>
                    <TableCell align="left">Github username</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.membersCollection.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row.id}>
                      <TableCell scope="row" className={classes.centered}>
                        <Avatar src={row.avatar_url} className={classes.avatar}></Avatar>
                      </TableCell>
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.login}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={props.membersCollection.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>

        </CardContent>
      </Card>

    </>
  );
};

import React from "react";
import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useStyles } from "../styles";
import Logo from "../components/Logo";
export default function HomeScreen() {
  const styles = useStyles();
  return (
    <Card>
      <CardActionArea>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography componet="h6" variant="h6">
              Fast and Easy
            </Typography>
            <Typography componet="h1" variant="h1">
              Order
              <br />
              and Pay
              <br />
              here
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
          </Box>
        </Box>
        <Box>
          <Logo large />
          <Typography componet="h5" variant="h5">
            Touch to start
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

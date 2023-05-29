/*
=========================================================
* Name
=========================================================

* Product Page: https://github.com/taka41sproduct/material-kit-react
* Copyright 2023 Taka41s (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiAvatarGroup from "@mui/material/AvatarGroup";

// Name React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function AvatarGroup() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <MuiAvatarGroup spacing={12}>
            <MKAvatar src={team1} alt="team 1" size="lg" />
            <MKAvatar src={team2} alt="team 2" size="lg" />
            <MKAvatar src={team3} alt="team 3" size="lg" />
            <MKAvatar src={team4} alt="team 4" size="lg" />
          </MuiAvatarGroup>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarGroup;

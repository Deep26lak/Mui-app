import "./App.css";
import {
  Container,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CssBaseline,
  Button,
  Grid,
  Toolbar,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import "@fontsource/roboto/500.css";

const theme = createTheme();

// Define your custom styles
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f9f6ee",
    padding: "20px",
  },
  icons: {
    marginRight: "10px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: { padding: "20px 0" },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: "1",
  },
  footer: {
    backgroundColor: "beige",
    marginTop: "20px",
    padding: "50px 0",
    boxShadow: "0 0 30px rgba(0,0,0,0.1)",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icons} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              color="textPrimary"
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum odor amet, consectetuer adipiscing elit. Est placerat
              quisque malesuada non dis dolor consectetur. Hac tincidunt hac
              convallis fermentum curae at faucibus aliquam. Maximus parturient
              iaculis mi augue cursus. Quis nulla viverra sollicitudin dignissim
              nulla praesent accumsan viverra sagittis.
            </Typography>
            <div className={classes.buttons}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography variant="p" gutterBottom>
                      this is a media card . You can use this section to
                      describe about your photo
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          All The Rights Are Reserve
          <CopyrightIcon sx={{ margin: "0 1rem" }} />
        </Typography>
      </footer>
    </ThemeProvider>
  );
}

export default App;

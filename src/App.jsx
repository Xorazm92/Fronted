// React 17+ versiyasida import React qilish shart emas
// import React from 'react'; - bu qatorni o'chirib tashlang
import './App.css';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  IconButton, 
  Button,
  Rating,
  Box,
  InputBase,
  Stack
} from '@mui/material';

import { 
  LocationOn, 
  Person, 
  FavoriteBorder, 
  ShoppingCart,
  Search 
} from '@mui/icons-material';

// Yangiliklar uchun ma'lumotlar
const newProducts = [
  {
    id: 1,
    title: "Aster Q893A LYIZON",
    image: "/images/carpet-new1.jpg",
    size: "60x100",
    manufacturer: "Казахстан",
    rating: 4,
    reviews: 0
  },
  // Boshqa yangi mahsulotlar...
];

// Chegirmalar uchun ma'lumotlar
const saleProducts = [
  {
    id: 1,
    title: "ASYC Q893A LYIZON",
    image: "/images/carpet-sale1.jpg",
    size: "60x100",
    manufacturer: "Казахстан",
    rating: 4,
    reviews: 0,
    oldPrice: 120000,
    newPrice: 100000,
    discount: 20
  },
  // Boshqa chegirmadagi mahsulotlar...
];

const App = () => {
  return (
    <Box>
      {/* Header */}
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <img src="/images/logo.png" alt="Bayan Sulu" style={{ height: 40 }} />
          
          <Stack direction="row" alignItems="center" sx={{ ml: 2 }}>
            <LocationOn color="action" />
            <Typography variant="body1" sx={{ ml: 1 }}>Алматы</Typography>
          </Stack>

          <Box sx={{ 
            flex: 1, 
            mx: 4,
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: 1,
            px: 2
          }}>
            <InputBase
              placeholder="Поиск по товарам"
              fullWidth
            />
            <IconButton>
              <Search />
            </IconButton>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Stack 
            direction="row" 
            justifyContent="space-around" 
            py={1}
          >
            {Array(7).fill('Ковры').map((item, index) => (
              <Button key={index} color="inherit">{item}</Button>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Banner */}
      <Box sx={{ 
        bgcolor: '#557B70',
        color: 'white',
        py: 6
      }}>
        <Container>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Новая коллекция ковров Venetta
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#E54D42',
                  '&:hover': { bgcolor: '#cc4439' }
                }}
              >
                СМОТРЕТЬ ВСЕ
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <img 
                  src="/images/carpet1.jpg" 
                  alt="Venetta" 
                  style={{ width: 200, height: 'auto' }} 
                />
                <img 
                  src="/images/carpet2.jpg" 
                  alt="Venetta" 
                  style={{ width: 200, height: 'auto' }} 
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ mt: 4 }}>
        {/* Новинки section */}
        <Box mb={6}>
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            mb={3}
          >
            <Typography variant="h5">Новинки</Typography>
            <Button color="primary">Все новинки</Button>
          </Stack>
          
          <Grid container spacing={3}>
            {newProducts.map(product => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                    />
                    <Box sx={{ 
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#557B70',
                      color: 'white',
                      px: 1,
                      borderRadius: 1
                    }}>
                      Новинка
                    </Box>
                    <IconButton 
                      sx={{ 
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'white',
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <FavoriteBorder />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Размер: {product.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Производитель: {product.manufacturer}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                      <Rating value={product.rating} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({product.reviews} отзывов)
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Скидки section */}
        <Box mb={6}>
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            mb={3}
          >
            <Typography variant="h5">Скидки</Typography>
            <Button color="primary">Все скидки</Button>
          </Stack>
          
          <Grid container spacing={3}>
            {saleProducts.map(product => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                    />
                    <Box sx={{ 
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#E54D42',
                      color: 'white',
                      px: 1,
                      borderRadius: 1
                    }}>
                      -{product.discount}%
                    </Box>
                    <IconButton 
                      sx={{ 
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'white',
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <FavoriteBorder />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Размер: {product.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Производитель: {product.manufacturer}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                      <Rating value={product.rating} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({product.reviews} отзывов)
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} mt={1}>
                      <Typography 
                        sx={{ 
                          textDecoration: 'line-through',
                          color: 'text.secondary'
                        }}
                      >
                        {product.oldPrice.toLocaleString()} ₸
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#E54D42',
                          fontWeight: 'bold'
                        }}
                      >
                        {product.newPrice.toLocaleString()} ₸
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default App;

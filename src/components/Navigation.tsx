import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [
  ['Home', 'home'],
  ['Expertise', 'expertise'],
  ['History', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box className="mobile-drawer" onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, gap: 1 }}>
        <ListIcon />
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Menu</h2>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                borderRadius: '8px',
                mb: 1,
                '&:hover': { backgroundColor: 'var(--bg-tertiary)' }
              }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} sx={{ '& .MuiTypography-root': { fontWeight: 500, fontFamily: 'Outfit' } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background: scrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
          transition: 'all 0.3s ease',
          padding: '0.5rem 0',
          color: 'var(--text-primary)'
        }}
      >
        <div className="container">
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px', p: '0 !important' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <h1
                style={{
                  fontSize: '1.5rem',
                  margin: 0,
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  fontWeight: 700
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span style={{ color: '#0EA5E9' }}>S</span><span style={{ color: '#F97316' }}>D</span>
              </h1>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item[0]}
                  onClick={() => scrollToSection(item[1])}
                  sx={{
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontFamily: 'Inter',
                    px: 2,
                    '&:hover': {
                      color: 'var(--accent-primary)',
                      background: 'transparent'
                    }
                  }}
                >
                  {item[0]}
                </Button>
              ))}
              <IconButton
                onClick={() => modeChange()}
                sx={{
                  ml: 1,
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-tertiary)',
                  '&:hover': { backgroundColor: 'var(--border-color)' }
                }}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>

            <Box sx={{ display: { sm: 'none' } }}>
              <IconButton
                onClick={() => modeChange()}
                sx={{
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-tertiary)'
                }}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </div>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'var(--bg-primary)',
              backgroundImage: 'none',
              color: 'var(--text-primary)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;

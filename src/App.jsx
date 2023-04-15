import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Favorites } from './components';

function App() {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#121212' }}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;

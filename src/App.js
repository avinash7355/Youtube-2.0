import {BrowserRouter,Routes,Route} from 'react-router-dom';
import{Box}from '@mui/material';
import{Navabar,Feed, VideoDetail,ChannelDetail,SearchFeed}from './components';
// const App = () => (
//   <BrowserRouter>
//     <Box sx={{ backgroundColor: '#000' }}>
//       <Navabar />
//       <Routes>
//         <Route exact path='/' element={<Feed />} />
//         <Route path='/video/:id' element={<VideoDetail />} />
//         <Route path='/channel/:id' element={<ChannelDetail />} />
//         <Route path='/search/:searchTerm' element={<SearchFeed />} />
//       </Routes>
//     </Box>
//   </BrowserRouter>
// );

// export default App;


import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navabar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

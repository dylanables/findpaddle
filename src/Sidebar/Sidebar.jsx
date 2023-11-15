import Brand from './Brand/Brand'
import Shape from './Shape/Shape'
import Surface from './Surface/Surface'
import Core from './Core/Core'
import Weight from './Weight/Weight'
import Handle from './Handle/Handle'
import Color from './Color/Color'
import './Sidebar.css'
import Button from '@mui/material/Button';

const Sidebar = ({brand, shape, surface, core, weight, handle, handleSelectFilter, handleRangeFilter, handleButtonFilter, clear}) => {
  return (
    <section className='sidebar'>
      <div className='sidebar-container'>
        <h2 className='sidebar-title'>Paddle Filters</h2>
        <Button variant="text" onClick={clear}>Clear All</Button>
        <Brand brand={brand} handleSelectFilter={handleSelectFilter} />
        <Shape shape={shape} handleButtonFilter={handleButtonFilter} />
        <Surface surface={surface} handleSelectFilter={handleSelectFilter} />
        <Core core={core} handleRangeFilter={handleRangeFilter}/>
        <Weight weight={weight} handleRangeFilter={handleRangeFilter} />
        <Handle handle={handle} handleRangeFilter={handleRangeFilter} />

      </div>
    </section>
  )
}

export default Sidebar
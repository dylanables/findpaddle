import Brand from './Brand/Brand'
import Shape from './Shape/Shape'
import Surface from './Surface/Surface'
import Core from './Core/Core'
import Weight from './Weight/Weight'
import Handle from './Handle/Handle'
import Color from './Color/Color'
import './Sidebar.css'

const Sidebar = ({brand, shape, surface, core, weight, handle, handleSelectFilter, handleRangeFilter}) => {
  return (
    <section className='sidebar'>

        <Brand brand={brand} handleSelectFilter={handleSelectFilter} />
        <Shape shape={shape} handleSelectFilter={handleSelectFilter} />
        <Surface surface={surface} handleSelectFilter={handleSelectFilter} />
        <Core core={core} handleRangeFilter={handleRangeFilter}/>
        <Weight weight={weight} handleRangeFilter={handleRangeFilter} />
        <Handle handle={handle} handleRangeFilter={handleRangeFilter} />
        <Color />


    </section>
  )
}

export default Sidebar
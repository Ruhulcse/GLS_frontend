
import { guideData } from '@/data/guideData'
import GuideItem from './GuideItem'

function GuideList({type,category,search}) {
  const filterByType = (item) =>{
      //const {type} = guideData
     if(type.length>0) {
         return item.type===type
     }
     return true
  }
  const filterByCategory = (item) =>{
    if(category.length>0) {
      return item.category ===category
    }
    return true
  }
  // const filterBySearch = (item) =>{
  //   item.filter()
  // }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mx-6 xl:grid-cols-3'>
        {guideData
        .filter(filterByType)
        .filter(filterByCategory)
        .filter((item)=>item.title.toLowerCase().includes(search))
        .map((item,i)=>(
            <GuideItem item={item} key={i}/>
        ))}
    </div>
  )
}

export default GuideList
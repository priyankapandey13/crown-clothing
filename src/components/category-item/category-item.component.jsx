import './category-item.styles.scss';

const CategoryItem = ({category})=>{
    const  {imageurl, title} = category;
    return(
            <div className='category-container'>
            <div className='background-image' style={{backgroundImage: `url(${imageurl})`,}}>
                {/* <img src={imageurl} alt={imageurl}/> */}
            </div>
                <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
                </div>
            </div>
            

    )
}

export default CategoryItem;
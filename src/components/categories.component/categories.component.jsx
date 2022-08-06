import Categoryitem from "../category-item/category-item.component";
import './categories.styles.scss';

const Categories = ({Category}) =>{
    return(
        <div className='categories-container'>
    {Category.map((category) => <Categoryitem key={category.id} category={category}></Categoryitem>)}
    </div>
    )
}
export default Categories;
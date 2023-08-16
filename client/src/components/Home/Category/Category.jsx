import { useNavigate } from "react-router-dom";
import "./Category.scss";
import img from "../../../assets/prd_06_1_2.jpg"

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <>
        <div className="shop-by-category">
        <div className="sec-heading"> 
        Categories
        </div>
             <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                ))}
            </div> 
              {/* <div className="categories">
              
                    <div
                    
                        className="category"
                        onClick={() => navigate(`/category/1`)}
                    >
                        <img
                            src={img}
                        />
                    </div>

                    <div
                    
                    className="category"
                    //onClick={() => navigate(`/category/${item.id}`)}
                    onClick={() => navigate(`/category/1`)}
                >
                    <img
                        src={img}
                    />
                </div>
                <div
                    
                    className="category"
                    //onClick={() => navigate(`/category/${item.id}`)}
                    onClick={() => navigate(`/category/1`)}
                >   
                    <img
                        src={img}
                    />
                </div>
                <div
                    
                    className="category"
                    //onClick={() => navigate(`/category/${item.id}`)}
                    onClick={() => navigate(`/category/1`)}
                >   
                    <img
                        src={img}
                    />
                </div>
                
                
            </div>  */}
        </div>
        </>
    );
};

export default Category;

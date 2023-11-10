import React, {useState} from "react";
import * as S from "./ProductRow.styles";

const ProductRow = ({ product, deleteProduct, modifyProduct }) => {
    
    // isEditing = 현재 상품 정보를 편집 중인지
    // editedName = 상품 이름 수정
    // editedPrice = 상품 가격 수정
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(product.name);
    const [editedPrice, setEditedPrice] = useState(product.price);

    // modifyProduct 호출
    const handleSaveClick = () => {
        modifyProduct(product, editedName, editedPrice);
        setIsEditing(false);
    };

    return (
        <S.LineForm>
        <tr>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                ) : (
                    <span style={{ color: product.stocked ? "black" : "red" }}>
                        {product.name}
                    </span>
                )}
            </td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedPrice}
                        onChange={(e) => setEditedPrice(e.target.value)}
                    />
                ) : (
                    <span>{product.price}</span>
                )}
            </td>
            <td>
                {isEditing ? (
                    <S.ButtonForm onClick={handleSaveClick}>Save</S.ButtonForm>
                    // <button onClick={handleSaveClick}>Save</button>
                ) : (
                    <S.ButtonForm onClick={() => setIsEditing(true)}>✏️</S.ButtonForm>
                    // <button onClick={() => setIsEditing(true)}></button>
                )}
            </td>
            <td>
                <S.ButtonForm onClick={() => deleteProduct(product)}>🗑️</S.ButtonForm>
                {/* <button onClick={() => deleteProduct(product)}></button>  */}
            </td>    
        </tr>
        </S.LineForm>
    );
};

export default ProductRow;
import styles  from './product-item.module.css'

function ButtonComponent({id}){
  // console.log(styles);
  
    return(
        <button id={id} className={styles.buttonStyle} >Click</button>
    )
}

export function ProductItem({listOfProduct , id}) {
  return (
    <div className="" style={{padding: '20px' , border: '1px solid red' , margin: '10px' }}>
      <p className={styles.product_title}>{listOfProduct}</p>
      <ButtonComponent id = {id} />
    </div>
  );
}

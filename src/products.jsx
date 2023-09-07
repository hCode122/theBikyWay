import { useEffect, useState } from "react";
import "./products.css"

const Products = () => {
    const [type, setType] = useState('road');
    const [sum, setSum] = useState(0);
    const [data, setData] = useState(
        {
            'bike A': {'num': 0, 'name': "Bike A"},
            'bike B': {'num': 0, 'name': "Bike B"},
            'bike C': {'num': 0, 'name': "Bike C"},
            'bike D': {'num': 0, 'name': "Bike D"},
            'bike E': {'num': 0, 'name': "Bike E"},
            'bike F': {'num': 0, 'name': "Bike F"},
            'bike G': {'num': 0, 'name': "Bike G"},
            'bike H': {'num': 0, 'name': "Bike H"},
            'bike I': {'num': 0, 'name': "Bike I"},
            'bike J': {'num': 0, 'name': "Bike J"},
            'bike K': {'num': 0, 'name': "Bike K"},
            'bike L': {'num': 0, 'name': "Bike L"}
        }
    );
    function handle (e) {
        var val = e.target.value;
        setType(val);
        
    }

    

    return (
        <>
            <DDown  props={{type, handle}}></DDown>
            <ProductList sum={sum} setSum={setSum} setData={setData} data={data} type={type}></ProductList>
            
            <Cart sum={sum} data={data}></Cart>
        </>
    )

    
}

const DDown = ({props}) => {
    return(
        <div className='drop'>
            <select value={props.type} onChange={props.handle}>
                <option value={'road'} name='road'>Road Bikes</option>
                <option value={'tour'} name='tourist'>Tourist Bikes</option>
            </select>
        </div>
    )
}

const ProductList = ({type,data,setData,sum,setSum}) => {
    
    
    function update(name,val,price) {
        var newVal = data[name]['num'] + val;
        setData(data => ({
            
                ...data,
                [name]: {
                    ...data[name],
                'num': newVal,
                
            }
        }));
        var s = sum;
        alert(val);
        alert(price);
        setSum((sum) => val*parseInt(price) + sum);
    }
    
    return(
        <div className="products">
            { type  == "road" ?  (<>
                <Item addItem={update} data={data} lnk='assets/bike5.jpg' nam='bike A' price='500'></Item>
                <Item addItem={update} data={data} lnk='assets/bike6.jpg' nam='bike B' price='700'></Item>
                <div className="line"></div>
                <Item addItem={update} data={data} lnk='assets/bike7.jpg' nam='bike C' price='600'></Item>
                <Item addItem={update} data={data} lnk='assets/bike8.jpg' nam='bike D' price='1500'></Item>
                <div className="line"></div>
                <Item addItem={update} data={data} lnk='assets/bike9.jpg' nam='bike E' price='3600'></Item>
                <Item addItem={update} data={data} lnk='assets/bike10.jpg' nam='bike F' price='3100'></Item>
                </>
            ) : type == "tour" ?  (<>
                <Item addItem={update} data={data} lnk='assets/bike11.jpg' nam='bike G' price='300'></Item>
                <Item addItem={update} data={data} lnk='assets/bike12.jpg' nam='bike H' price='1300'></Item>
                <div className="line"></div>
                <Item addItem={update} data={data} lnk='assets/bike13.jpg' nam='bike I' price='800'></Item>
                <Item addItem={update} data={data} lnk='assets/bike14.jpg' nam='bike J' price='2500'></Item>
                <div className="line"></div>
                <Item addItem={update} data={data} lnk='assets/bike15.jpg' nam='bike K' price='1600'></Item>
                <Item addItem={update} data={data} lnk='assets/bike16.jpg' nam='bike L' price='440'></Item>
                </>
            ) : (<></>)
            }   
        </div>
    )
}

const Item = ({lnk,nam,price,addItem,data}) => {
    const [val2, setval] = useState(0);
    
    function Buy(e) {
        e.preventDefault();
        var dat = parseInt(e.target.children['input'].value);
        setval(0);
        addItem(nam,dat,price);
    }
    
    function edit(e) {
        if (e.target.name == '-' && val2 > 0) {
            
            setval(val2 => val2-1);
            
        } else if (e.target.name == '+') {
            
            setval(val2 => val2+1);
        }
    }
    return (
        <div className="item">
            <img src={lnk}></img>
            <label>Name: {nam}</label>
            <div className="price">
                <img src='assets/price.svg'></img>
                <p>Costs: {price}$</p>
            </div>
            
            <form onSubmit={Buy} className="counter">
                <button type="button" name="-" onClick={edit}>-</button>
                <input readOnly name='input' value={val2} type="text"></input>
                <button type="button" name="+" onClick={edit}>+</button>
                <button type="submit">Buy</button>
            </form>
            
        </div>
    )
}

const Cart = ({data,sum}) => {
    const [clas, setClas] = useState('cart');
    const [render, setR] = useState(false);

    var a = [];
    Object.keys(data).map((element) => {
        if (data[element]['num'] != 0) {
        var b = [];
        b.push(data[element]['num']);
        b.push(data[element]['name']);
        a.push(b);}
        
    });
    if (a.length != 0 && render==false) {setR(true);}
    

    const [itemClas, setiClas] = useState('itemMenu');
    
    function cart() {
        itemClas == 'itemMenu' ? setiClas('itemMenu2') : itemClas == 'itemMenu2' ? setiClas('itemMenu3') :
        setiClas('itemMenu2');
        clas == 'cart' ? setClas('cart2') : clas == 'cart2' ? setClas('cart3') :
        setClas('cart2');
    }

    

    return(
        <>
        <button onClick={cart} className={clas}><img className="cimg" src='assets/cart.svg'></img></button>
        <div key='text' className={itemClas}>
                <label className="iLabel">Shopping cart</label>
                <div className="items">
                    {   render ? (
                        Object.keys(a).map((z,index) => (
                            <div className="miniItem" key={index+32121}>
                            <label key={index*2+30}>{a[z][1]}</label>
                            <p key={index+2*1000}>    {a[z][0]}  </p>   </div>
                        )
                        )
                        ) : (<><p className="empty">Empty :(</p></>)
                        
                    }
                </div>
                {
                    render ? (<><p>Total: {sum}$</p></>):(<></>)
                }
        </div>
        </>
        
    )
}

export default Products;
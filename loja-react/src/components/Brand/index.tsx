import { type } from 'os';
import { Brand } from '../../@types/intex';
import './style.css';

type BrandProps = {
    items: Array<Brand>;
}
export function Brands(props: BrandProps) {
    return (

        <div className="brands">
            <ul>
                {props.items.map(item =>{
                    return (
                        <li><img src={item.source} alt={item.alt} /></li>
                    )
                })
                }
               
            </ul>
        </div>
    )
}
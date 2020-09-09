import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const TopBar = (props) => {
    useEffect(() => {
    }, [props.direction]);

    const getBarElement = (item, index) => {
        if (item) {
            switch (index) {
                case 0:
                    // return <Link to={`/map?step=2&companyId=${item.id}`}>{item.name ? item.name: item.crop_name }/</Link>
                    return item.name ? <span key={index}>{item.name}/</span> : <span key={index}>{item.crop_name}/</span>;
                case 1:
                // return <Link to={`/map?step=3&farmId=${item.id}`}>{item.name ? item.name: item.crop_name}/</Link>
                case 2: {
                    if (props.direction[1]) {
                        return item.name ? <span key={index}>{item.name}/</span> : <span key={index}>{item.crop_name}/</span>;
                        // <Link
                        //     to={`/map?step=4&farmId=${props.direction[1].id}&specialityId=${item.id}`}>{item.name ? item.name: item.crop_name}/
                        // </Link>
                    } else break ;
                }
                case 3:{
                    if (props.direction[1]) {
                        return item.name ? <span key={index}>{item.name}/</span> : <span key={index}>{item.crop_name}/</span>;
                        // <Link
                        //     to={`/map?step=5&sectionId=${item.id}&speciality_id=${props.direction[2].id}`}>{item.name ? item.name : item.crop_name}/
                        // </Link>
                    } else break ;
                }
                case 4:
                    return item.name ? <span key={index}>{item.name}/</span> : <span key={index}>{item.crop_name}/</span>;
                    // <Link
                    //     to={`/map?step=6&unitId=${item.id}&yearId=${props.yearId}`}>{item.name ? item.name : item.crop_name}/</Link>
                case 5:
                    return item.name ? <span key={index}>{item.name}/</span> : <span key={index}>{item.crop_name}/</span>;
                    // <Link
                    //     to={`/map?step=7&pieceId=${item.id}&yearId=${props.yearId}`}>{item.name ? item.name : item.crop_name}/</Link>
                case 6:
                    return item.name ? <span key={index}>{item.name}/</span> : <span key={index}>{item.crop_name}/</span>;
                    // <Link
                    //     to={`/map?step=8&plantId=${item.id}&yearId=${props.yearId}`}>{item.name ? item.name : item.crop_nam}/</Link>
                default:
                    return null;
            }
        } else return null;
    }

    return (
        <div className="bread_crumb">
            <span>مسیر انتخابی:</span>
            {
                props.direction.length > 0 ?
                    props.direction.map((item, index) => (
                        item ?
                            getBarElement(item, index) : null
                    )) : null
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        direction: state.plantationState.plantationDirection,
        yearId: state.plantationState.yearId
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)

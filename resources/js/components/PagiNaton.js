import React from 'react';

const PageNation = () => {
    return(
        <div className="clearfix">
        <ul className="pagination">
            <li className="page-item disabled"><a href="#">前</a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item active"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">4</a></li>
            <li className="page-item"><a href="#" className="page-link">5</a></li>
            <li className="page-item"><a href="#" className="page-link">次</a></li>
        </ul>
    </div>
    )
}

export default PageNation;
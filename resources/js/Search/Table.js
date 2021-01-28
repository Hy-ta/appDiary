import React from 'react'

const Table = (props) => {
    console.log('data', props.state)
    return(
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Descriptipn</th>
                                    <th>Created date</th>
                                    <th>start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.state ? 
                                    props.state.filter(data => data.created_at !== null).map((data, key)=> {
                                        return(
                                                <tr key={data.id}>
                                                    <td><a href="#">{data.title}</a></td>
                                                    <td>{data.description.slice(0,11)}</td>                        
                                                    <td>{data.created_at.slice(0,10)}</td>
                                                    <td>{data.startDate || null}</td>
                                                    <td>{data.endDate || null}</td>
                                                </tr>
                                    )
                                }) :                     
                                    <div className="table table-striped table-hover">
                                        No data yet.
                                    </div>
                                }
                        </tbody>
                    </table>
                </div>
    )
}

export default Table;
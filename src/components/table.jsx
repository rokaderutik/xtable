import { useState } from "react";
import "./table.css";

const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
]



export default function Table() {
    const [filteredData, setFilteredData] = useState(data);

    function handleFilterByDate() {
        
        data.sort((a, b) => {
            if(new Date(a.date) < new Date(b.date)){
                return 1;
            } else if(new Date(a.date) > new Date(b.date)) {
                return -1;
            } else {
                if(a.views < b.views) return 1;
                else if(a.views > b.views) return -1;
                else return 0;
            }
        })
        
        setFilteredData([...data]);
    }

    function handleFilterByViews() {
        
        data.sort((a, b) => {
            if(a.views < b.views) return 1;
            else if(a.views > b.views) return -1;
            else {
                if(new Date(a.date) < new Date(b.date)){
                    return 1;
                } else if(new Date(a.date) > new Date(b.date)) {
                    return -1;
                } else {
                    return 0;
                }
            }   
        })
        
        setFilteredData([...data]);
    }

    return (
        <div className="wrapper">
            <h1>Date and Views Table</h1>
            <div className="button_group">
                <button onClick={handleFilterByDate}>Sort by Date</button>
                <button onClick={handleFilterByViews}>Sort by Views</button>
            </div>

            <table>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
                {
                    filteredData.map((rowData, ind) => {
                        return (
                            <tr key={rowData.article + ind}>
                                <td>{rowData.date}</td>
                                <td>{rowData.views}</td>
                                <td>{rowData.article}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}
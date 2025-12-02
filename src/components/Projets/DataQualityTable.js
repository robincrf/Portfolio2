import React from 'react';
import '../../assets/projet/DataQualityTable.css';

const DataQualityTable = () => {
    const data = [
        {
            table: 'reporting',
            metric: 'completeness',
            percentage: 87.25,
            description: 'Taux de complétude des données'
        },
        {
            table: 'reporting',
            metric: 'uniqueness',
            percentage: 0,
            description: 'Taux d\'unicité des données'
        },
        {
            table: 'reporting',
            metric: 'timeliness',
            percentage: 0,
            description: 'Taux de ponctualité des données'
        },
        {
            table: 'écart reporting tracking',
            metric: 'integrity',
            percentage: null,
            gap: 17064635,
            description: 'Intégrité des données (écart)'
        }
    ];

    return (
        <div className="dq-table-container">
            <table className="dq-table">
                <thead>
                    <tr>
                        <th>Table</th>
                        <th>Métrique</th>
                        <th>Pourcentage</th>
                        <th>Description</th>
                        {data.some(d => d.gap) && <th>Gap</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className={`row-${row.metric}`}>
                            <td className="cell-table">{row.table}</td>
                            <td className="cell-metric">{row.metric}</td>
                            <td className="cell-percentage">
                                {row.percentage !== null ? (
                                    <span className={`badge ${row.percentage > 50 ? 'success' : 'warning'}`}>
                                        {row.percentage.toFixed(2)}%
                                    </span>
                                ) : (
                                    '-'
                                )}
                            </td>
                            <td className="cell-description">{row.description}</td>
                            {row.gap && <td className="cell-gap">{row.gap.toLocaleString()}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataQualityTable;

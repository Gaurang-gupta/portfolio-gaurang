import React from 'react'

const WorkingSkills = ({ skill, percentage, color }) => {
    const colors = {
        "pink": "#c87879",
        "purple": "#8f81aa",
        "blue": "#5e87b7",
        "magenta": "#ab69c3",
    }

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "rgb(100 116 139)",
    borderRadius: 50,
    marginTop: 5,
  };

  const fillerStyles = {
    height: '100%',
    width: `${percentage}`,
    backgroundColor: colors[color],
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className='mb-3 text-sm'>
        <h1>{skill}</h1>
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${percentage}`}</span>
            </div>
        </div>
    </div>
  );
};

export default WorkingSkills;























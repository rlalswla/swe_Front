import React from 'react';
import './TechStackPopup.css'; // CSS 파일을 가져옵니다



const TechStackPopup = ({ setForm, setShowPopup, selectedStacks, onSelect }) => {

  const techStacks = [
    { label: 'JavaScript', value: 1 },
    { label: 'TypeScript', value: 2 },
    { label: 'React', value: 3 },
    { label: 'Vue', value: 4 },
    { label: 'Svelte', value: 5 },
    { label: 'Node.js', value: 6 },
    { label: 'Java', value: 7 },
    { label: 'Spring', value: 8 },
    { label: 'Go', value: 9 },
    { label: 'Next.js', value: 10 },
    { label: 'Nest.js', value: 11 },
    { label: 'Kotlin', value: 12 },
    { label: 'Express', value: 13 },
    { label: 'MySQL', value: 14 },
    { label: 'PHP', value: 15 },
    { label: 'Python', value: 16 },
    { label: 'Django', value: 17 },
    { label: 'MongoDB', value: 18 },
    { label: 'GraphQL', value: 19 },
    { label: 'Flutter', value: 20 },
    { label: 'Swift', value: 21 },
    { label: 'Unity', value: 22 },
    { label: 'AWS', value: 23 },
    { label: 'ReactNative', value: 24 },
  ];
  
  
  const handleClick = (stack) => {
    if (selectedStacks.includes(stack.value)) {
      onSelect(selectedStacks.filter(s => s !== stack.value));
    } else {
      onSelect([...selectedStacks, stack.value]);
    }
  };

  const handleSubmit = () => {
    setForm(prevForm => ({ ...prevForm, stack: selectedStacks }));
    setShowPopup(false);
  };

  return (
    <div className="popup">
      <div className="popup-header">
        <span className="popup-title">Tech Stack</span>
      </div>
      <div className="popup-body">
        {techStacks.map((stack) => (
          <button
            
            key={stack.value}
            className={`stack-button ${selectedStacks.includes(stack.value) ? 'selected' : ''}`}
            onClick={() => handleClick(stack)}
          >
            <input 
            type="text" 
            value={stack.label} 
            placeholder={stack.label} 
            readOnly 
            style={{ border: 'none', background: 'transparent',padding: '0', margin: '0' ,width: '100%', height: '100%'}} 
          />
            
          </button>
        ))}
      </div>
      <div className="popup-footer">
        <button className="reset-button" onClick={() => onSelect([])}>Reset</button>
        <button className="filtering-button" onClick =  {handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default TechStackPopup;

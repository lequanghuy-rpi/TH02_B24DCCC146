import { useState, useEffect } from 'react';

//BÀI 1
function DisplayNumber({ number }) {
  return <h2>Giá trị hiện tại: {number}</h2>;
}

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2> Ứng dụng Đếm số</h2>
      <DisplayNumber number={number} />
      <button onClick={() => setNumber(number - 1)} style={{ marginRight: '10px' }}>-</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}












//BÀI 2

function Task({ task }) {
  return <li>{task}</li>;
}

function TaskList() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => setTaskInput(e.target.value);

  const addTask = () => {
    const t = taskInput.trim();
    if (!t) return;
    setTasks([...tasks, t]);
    setTaskInput('');
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2> Danh sách công việc</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleChange}
      
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
        placeholder="Nhập công việc..."
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={addTask} style={{ padding: '8px', marginLeft: '8px' }}>
        Thêm
      </button>
      <ul style={{ marginTop: '20px' }}>
        {tasks.map((task, idx) => (
          <Task key={idx} task={task} />
        ))}
      </ul>
    </div>
  );
}









//BÀI 3
function Box({ color }) {
  return <div style={{ width: '200px', height: '200px', backgroundColor: color, marginTop: '20px' }} />;
}

function ColorChanger() {
  const [color, setColor] = useState();
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2> Ứng dụng đổi màu nền</h2>
      {['red','green','blue','yellow'].map(c => (
        <button key={c} onClick={() => setColor(c)} style={{ marginRight: '8px' }}>{c}</button>
      ))}
      <Box color={color} />
    </div>
  );
}





//BÀI 4
function StudentCard({ name, age, className }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginBottom: '10px' }}>
      <h3>{name}</h3>
      <button onClick={() => setShow(!show)}>
        {show ? 'Ẩn chi tiết' : 'Xem chi tiết'}
      </button>
      {show && (
        <div>
          <p>Tuổi: {age} - Lớp: {className}</p>
          
        </div>
      )}
    </div>
  );
}

function StudentList() {
  const students = [
    { name: 'Lê Quang Huy', age: 20, className: 'CNTT' },
    { name: 'Bùi Văn THắng', age: 21, className: 'QTKD' },
    { name: 'Lê Văn Hoàng', age: 22, className: 'Kinh tế' },
  ];
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2> Thẻ sinh viên</h2>
      {students.map((s, i) => (
        <StudentCard key={i} {...s} />
      ))}
    </div>
  );
}






//BÀI 5

function TimeDisplay({ time }) {
  return <h2>Thời gian hiện tại: {time}</h2>;
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2> Đồng hồ</h2>
      <TimeDisplay time={time} />
    </div>
  );
}




function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Tập hợp các bài React</h1>
      <Counter />
      <TaskList />
      <ColorChanger />
      <StudentList />
      <Clock />
    </div>
  );
}

export default App;

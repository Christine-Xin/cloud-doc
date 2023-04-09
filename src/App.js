import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './components/defaultFiles';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className='col-3 left-panel'>
          <FileSearch title="我的云文档" onSearchFile={(val)=>{console.log(val)}}/>
          <FileList files={defaultFiles} onFileClick={(id)=>{console.log(id)}}/>
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

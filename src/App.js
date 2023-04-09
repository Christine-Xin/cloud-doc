import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './components/defaultFiles';
import BottomBtn from './components/BottomBtn';
import {faPlus, faFileImport} from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className='col-3 left-panel'>
          <FileSearch title="我的云文档" onSearchFile={(val)=>{console.log(val)}}/>
          <FileList files={defaultFiles} onFileClick={(id)=>{console.log(id)}} onSaveEdit={(id,newValue)=>{console.log(id, newValue)}}/>
          <div className="row g-0">
            <div className='col'>
              <BottomBtn text="新建" colorClass="btn-primary" icon={faPlus}></BottomBtn>
            </div>
            <div className='col'>
            <BottomBtn text="导入" colorClass="btn-success" icon={faFileImport}></BottomBtn>
            </div>
          </div>
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

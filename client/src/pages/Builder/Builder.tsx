import BuilderSidebar from './BuilderSidebar';
import BuilderMain from './BuilderMain';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ViewBuilder() {
  const [selectedView, setSelectedView] = useState<number>();

  return (
    <div>
      <div className="flex m-10 gap-14">
        <div className="flex-2">
          <BuilderSidebar
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        </div>
        <div className="flex-1">
          {selectedView
            ? <BuilderMain selectedView={selectedView} />
            : 'Selected A table'}
        </div>
      </div>
    </div>
  );
}

export default ViewBuilder;

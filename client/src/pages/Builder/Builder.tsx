import BuilderSidebar from './BuilderSidebar';
import BuilderMain from './BuilderMain';

function ViewBuilder() {
  return (
    <div>
      <div className="flex m-10 gap-14">
        <div className="flex-2">
          <BuilderSidebar />
        </div>
        <div className="flex-1">
          <BuilderMain />
        </div>
      </div>
    </div>
  );
}

export default ViewBuilder;

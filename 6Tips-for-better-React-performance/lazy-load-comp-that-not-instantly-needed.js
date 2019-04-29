// ./Tooltip.jsx
const MUITooltip = React.lazy(() => import("@material-ui/core/Tooltip"));
function Tooltip({ children, title }) {
  return (
    <React.Suspense fallback={children}>
      <MUITooltip title={title}>{children}</MUITooltip>
    </React.Suspense>
  );
}

// ./Component.jsx
function Component(props) {
  return (
    <Tooltip title={props.title}>
      <AnotherComponent />
    </Tooltip>
  );
}

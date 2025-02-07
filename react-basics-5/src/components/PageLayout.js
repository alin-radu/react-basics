export const PageLayout = ({
  title = 'useService multiple instances Demo',
  subtitle,
  children,
}) => (
  <div className="container">
    <div className="card">
      <p className="title">{title}</p>
      <p className="title">{subtitle}</p>
      <div className="flex flex-col items-center mt-4 gap-4">{children}</div>
    </div>
  </div>
);

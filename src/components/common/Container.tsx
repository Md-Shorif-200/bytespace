type ContainerProps = {
  children: React.ReactNode;
  className?:string
};

const Container = ({ children,className }: ContainerProps) => {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 lg:px-0 ${className}`}>{children}</div>
  );
};

export default Container;

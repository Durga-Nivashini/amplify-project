export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Welcome to AWS Amplify</h1>

      <p>This website is deployed using Terraform + AWS Amplify.</p>

      <button
        style={{
          padding: "12px 20px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        MiniBee Demo
      </button>
    </main>
  );
}
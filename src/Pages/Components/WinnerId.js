import { useParams } from "react-router-dom";

function WinnerId({ winnerId }) {
  const { id } = useParams;
  return (
    <>
      {winnerId === "crosses" || winnerId === "noughts" ? (
        <main
          className={
            winnerId === "crosses" && winnerId !== "both"
              ? `winner-crosses`
              : `winner-noughts`
          }
        >
          <h1>WINNER!</h1>
        </main>
      ) : (
        <main className="winner-both">
          {/* <h1>WINNER!</h1> */}
          <div className="both-noughts">
            <h1>
              <div>DRAW!</div>
              <div>DRAW!</div>
              <div>DRAW!</div>
            </h1>
          </div>
        </main>
      )}
    </>
  );
}
export default WinnerId;

export default function UserFrom() {
  return (
    <>
      <section id="user-input">
        <div class="input-group">
          <div>
            <label for="initial-investment">Initial Investment</label>
            <input type="number" id="initial-investment" required></input>
          </div>
          <div>
            <label for="annual-investment">Annual Investment</label>
            <input type="number" id="annual-investment" required></input>
          </div>
          <div>
            <label for="expected-return">Expected Return</label>
            <input type="number" id="expected-return" required></input>
          </div>
          <div>
            <label for="duration">Duration</label>
            <input type="number" id="duration" required></input>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

interface Props {
  nimi: string;
  kuvaus: string;
  pysäkointi?: string;
  palvelut?: string;
  navigaattoriin: string;
}

const KalastusPaikka: React.FC<Props> = ({
  nimi,
  kuvaus,
  pysäkointi,
  palvelut,
  navigaattoriin
}) => {
  return (
    <section style={{ marginBottom: "2rem", background: 'var(--bg-accordion-header)', padding: '0.5em' }}>
      <div className="mark" />
      <h5>{nimi}</h5>

      <p>{kuvaus}</p>

      {palvelut && (
        <p>
          <strong>Palvelut:</strong> {palvelut}
        </p>
      )}

      {pysäkointi && (
        <p>
          <strong>Pysäköinti ja kulku:</strong> {pysäkointi}
        </p>
      )}

      {navigaattoriin && (
        <p>
          <strong>Navigaattoriin:</strong> {navigaattoriin}
        </p>
      )}
    </section>
  );
};

export default KalastusPaikka;
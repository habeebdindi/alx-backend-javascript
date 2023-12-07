interface MajorCredits {
    credits: number;
    brand: 'Major';
}

interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
  return totalCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
   return totalCredits;
}

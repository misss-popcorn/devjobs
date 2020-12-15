import styled from "styled-components";

const Box = styled.div`
  height: 228px;
  border-radius: 6px;
  padding: 32px;
  position: relative;
  margin: 32.5px 15px;
  width: 30%;
  background: ${({ theme }) => theme.backGround};
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 32.5px 5.5px;
    width: 48%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  border-radius: 15px;
  background: white;
`;

const Image = styled.img`
  width: 50px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
`;
const CompanyName = styled.p`
  text-transform: capitalize;
`;
const Heading2 = styled.h2`
   {
    color: ${({ theme }) => theme.itemColor};
  }
`;

const Heading4 = styled.h4`
  text-transform: capitalize;
`;

export const Item = ({ job }) => {
  return (
    <Box>
      <ImageContainer>
        <Image src={job.company_logo} alt="logo" />
      </ImageContainer>
      <p>
        {job.created_at} . {job.type}
      </p>
      <Heading2>{job.title}</Heading2>
      <CompanyName>{job.company}</CompanyName>
      <Heading4>{job.location}</Heading4>
    </Box>
  );
};
